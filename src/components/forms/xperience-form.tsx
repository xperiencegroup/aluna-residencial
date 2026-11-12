import { useState } from "react";
import { useForm } from "react-hook-form";

// components
import PillButton from "@/components/pill-button";
import {
  Field,
  PhoneField,
  correoRules,
  inputClass,
} from "@/components/forms/fields";

// icons
import ArrowIcon from "@/assets/icons/components/arrow-icon";
import userIcon from "@/assets/icons/form/user-icon.svg";
import mailIcon from "@/assets/icons/form/mail-icon.svg";

// logica
import { getLeadGuardado, solicitarFolleto } from "@/lib/leads";

// tracking

// constantes
import { CLICK_AND_XPERIENCE_URL } from "@/const/click-and-xperience";

type Values = {
  nombreCompleto: string;
  correo: string;
  telefono: string;
};

const nombreCompletoRules = {
  required: "Escribe tu nombre y apellido",
  validate: (v: string) =>
    v.trim().split(/\s+/).length >= 2 || "Escribe tu nombre y apellido",
};

const labelClass = "caption font-medium text-proposito";

export default function XperienceForm() {
  const [error, setError] = useState(false);
  const guardado = getLeadGuardado();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    mode: "onTouched",
    defaultValues: {
      nombreCompleto: [guardado?.nombre, guardado?.apellidos]
        .filter(Boolean)
        .join(" "),
      correo: guardado?.correo ?? "",
      telefono: "",
    },
  });

  const onSubmit = async (v: Values) => {
    try {
      setError(false);

      // "Nombre completo" se separa en nombre (primera palabra) y apellidos (el resto)
      const [nombre, ...resto] = v.nombreCompleto.trim().split(/\s+/);

      await solicitarFolleto({
        nombre,
        apellidos: resto.join(" "),
        correo: v.correo.trim(),
        telefono: v.telefono,
      });

      window.location.assign(CLICK_AND_XPERIENCE_URL);
    } catch {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col gap-[48px] short:gap-[24px] max-lg:gap-[28px]"
    >
      <h2
        id="xperience-popup-title"
        className="hero-2 font-semibold text-balance text-proposito max-md:text-[30px]"
      >
        Ingresa a Nuestra <br /> Plataforma Interactiva
      </h2>

      <div className="flex flex-col gap-[24px] short:gap-[16px]">
        {/* nombre completo */}
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="xp-nombre" className={labelClass}>
            Nombre completo*
          </label>
          <Field
            id="xp-nombre"
            icon={userIcon}
            error={errors.nombreCompleto?.message}
          >
            <input
              id="xp-nombre"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre y apellido"
              aria-invalid={!!errors.nombreCompleto}
              aria-describedby={
                errors.nombreCompleto ? "xp-nombre-error" : undefined
              }
              className={inputClass}
              {...register("nombreCompleto", nombreCompletoRules)}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-[24px] short:gap-[16px] md:grid-cols-2 md:gap-[16px]">
          {/* correo */}
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="xp-correo" className={labelClass}>
              Correo*
            </label>
            <Field
              id="xp-correo"
              icon={mailIcon}
              error={errors.correo?.message}
            >
              <input
                id="xp-correo"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                aria-invalid={!!errors.correo}
                aria-describedby={errors.correo ? "xp-correo-error" : undefined}
                className={inputClass}
                {...register("correo", correoRules)}
              />
            </Field>
          </div>

          {/* teléfono */}
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="xp-telefono" className={labelClass}>
              Teléfono*
            </label>
            <PhoneField control={control} name="telefono" id="xp-telefono" />
          </div>
        </div>

        {/* confirmar */}
        <PillButton
          type="submit"
          disabled={isSubmitting}
          iconPosition="end"
          base="border-beige bg-proposito text-beige focus-visible:ring-proposito"
          pressed="active:bg-beige active:text-proposito active:border-proposito"
          className="self-end max-md:w-full"
        >
          {isSubmitting ? "Enviando..." : "Confirmar"}
          <ArrowIcon className="size-[12px]" />
        </PillButton>

        <div aria-live="polite">
          {error && (
            <p className="regular text-center text-impulso">
              No pudimos enviar tus datos. Intenta de nuevo.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

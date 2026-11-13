import { useState } from "react";
import { useForm } from "react-hook-form";

// components
import PillButton from "@/components/pill-button";
import {
  Field,
  PhoneField,
  apellidosRules,
  correoRules,
  inputClass,
  nombreRules,
} from "@/components/forms/fields";

// icons
import ArrowIcon from "@/assets/icons/components/arrow-icon";
import userIcon from "@/assets/icons/form/user-icon.svg";
import mailIcon from "@/assets/icons/form/mail-icon.svg";

// logica
import { getLeadGuardado, solicitarFolleto } from "@/lib/leads";

type Values = {
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: string;
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
      nombre: guardado?.nombre ?? "",
      apellidos: guardado?.apellidos ?? "",
      correo: guardado?.correo ?? "",
      telefono: "",
    },
  });

  const onSubmit = async (v: Values) => {
    try {
      setError(false);

      await solicitarFolleto({
        nombre: v.nombre.trim(),
        apellidos: v.apellidos.trim(),
        correo: v.correo.trim(),
        telefono: v.telefono,
      });
    } catch {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col gap-[38px] short:gap-[24px] max-lg:gap-[28px]"
    >
      <h2
        id="xperience-popup-title"
        className="hero-2 font-semibold text-balance text-proposito max-md:text-[30px]"
      >
        Ingresa a Nuestra <br className="max-md:hidden" /> Plataforma
        Interactiva
      </h2>

      <div className="flex flex-col gap-[12px] short:gap-[8px]">
        {/* nombre y apellidos */}
        <div className="grid grid-cols-1 gap-[24px] short:gap-[16px] md:grid-cols-2 md:gap-[16px]">
          {/* nombre */}
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="xp-nombre" className={labelClass}>
              Nombre*
            </label>
            <Field
              id="xp-nombre"
              icon={userIcon}
              error={errors.nombre?.message}
            >
              <input
                id="xp-nombre"
                type="text"
                autoComplete="given-name"
                placeholder="Tu nombre"
                aria-invalid={!!errors.nombre}
                aria-describedby={errors.nombre ? "xp-nombre-error" : undefined}
                className={inputClass}
                {...register("nombre", nombreRules)}
              />
            </Field>
          </div>

          {/* apellidos */}
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="xp-apellidos" className={labelClass}>
              Apellidos*
            </label>
            <Field
              id="xp-apellidos"
              icon={userIcon}
              error={errors.apellidos?.message}
            >
              <input
                id="xp-apellidos"
                type="text"
                autoComplete="family-name"
                placeholder="Tus apellidos"
                aria-invalid={!!errors.apellidos}
                aria-describedby={
                  errors.apellidos ? "xp-apellidos-error" : undefined
                }
                className={inputClass}
                {...register("apellidos", apellidosRules)}
              />
            </Field>
          </div>
        </div>

        {/* correo */}
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="xp-correo" className={labelClass}>
            Correo*
          </label>
          <Field id="xp-correo" icon={mailIcon} error={errors.correo?.message}>
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

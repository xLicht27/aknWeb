import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const RedesContraIncendios = () => {
  return (
    <ServiceLayout
      title="Sistema de Redes <span>Contra Incendios</span>"
      subtitle="Protección integral de infraestructuras"
      description="Garantice la seguridad de sus recintos mediante un mantenimiento riguroso de todo el sistema contra incendios, cumpliendo con los estándares de seguridad industrial más exigentes."
      images={['IMG_4624.webp', 'IMG_1558.webp']}
      highlights={[
        {
          title: "Detección y Alarma",
          icon: "fas fa-bell",
          items: ["Mantenimiento preventivo de sistema de detección y alarma contra incendio."]
        },
        {
          title: "Sistemas Hidráulicos",
          icon: "fas fa-fire-extinguisher",
          items: ["Mantenimiento preventivo de bombas contra incendio.", "Mantenimiento preventivo de red húmeda contra incendio."]
        },
        {
          title: "Extintores",
          icon: "fas fa-grip-fire",
          items: ["Mantenimiento y recarga de extintores."]
        }
      ]}
      benefits={[
        {
          title: "Respuesta Rápida",
          text: "Sistemas funcionales y verificados para reaccionar al instante ante cualquier conato de incendio.",
          icon: "fas fa-tachometer-alt"
        },
        {
          dark: true,
          title: "Certificación y Cumplimiento",
          text: "Mantenimiento y pruebas conforme a protocolos NFPA y defensa civil.",
          icon: "fas fa-file-contract"
        }
      ]}
    />
  );
};

export default RedesContraIncendios;

import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const InfraestructuraElectrica = () => {
  return (
    <ServiceLayout
      title="Infraestructura <span>Eléctrica</span>"
      subtitle="Diseño, instalación y mantenimiento integral"
      description="Brindamos soluciones robustas de infraestructura para garantizar el funcionamiento continuo y seguro de sus instalaciones mediante sistemas de respaldo de energía, seguridad contra incendios y bombeo industrial."
      points={[
        "Diseño, instalación y mantenimiento de: Grupos electrógenos, sistema contra incendios y sistema de bombeo."
      ]}
      images={[
        "IMG_7832.webp",
        "IMG_3298.webp",
        "IMG_7932.webp",
        "IMG_5833.webp",
        "IMG_5489.webp"
      ]}
      highlights={[
        {
          title: "Grupos Electrógenos",
          icon: "fas fa-charging-station",
          items: ["Instalación, mantenimiento y reparación", "Sincronismo de grupos electrógenos", "Tableros de transferencia automática"]
        },
        {
          title: "Sistemas Contra Incendios",
          icon: "fas fa-fire-extinguisher",
          items: ["Mantenimiento preventivo de sistemas NFPA", "Redes hidráulicas contra incendios", "Sistemas de detección y alarma"]
        },
        {
          title: "Sistemas de Bombeo",
          icon: "fas fa-water",
          items: ["Mantenimiento de sistemas de bombeo", "Tableros de control de bombas", "Optimización de presión y caudal"]
        }
      ]}
      benefits={[
        {
          title: "Respaldo y Continuidad",
          text: "Garantizamos que su negocio nunca se detenga con sistemas de energía de respaldo y bombeo diseñados a medida.",
          icon: "fas fa-shield-alt"
        },
        {
          dark: true,
          title: "Cumplimiento y Certificación",
          text: "Operamos e instalamos bajo las normas internacionales NFPA y de seguridad de defensa civil.",
          icon: "fas fa-file-contract"
        }
      ]}
    />
  );
};

export default InfraestructuraElectrica;

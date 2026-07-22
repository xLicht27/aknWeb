import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const SistemaMediaTension = () => {
  return (
    <ServiceLayout
      title="Media y Baja <span>Tensión</span>"
      subtitle="Proyectos y mantenimiento especializado"
      description="Ejecución de proyectos de impacto, montajes y mantenimiento preventivo-correctivo de subestaciones eléctricas y redes de distribución, con personal calificado."
      points={[
        "Diseño, instalación y mantenimiento preventivo."
      ]}
      images={[
        "IMG_5995.webp",
        "IMG_6732.webp"
      ]}
      highlights={[
        {
          title: "Gestión de Proyectos",
          icon: "fas fa-project-diagram",
          items: ["Gestión, diseño y ejecución de proyectos en media tensión."]
        },
        {
          title: "Mantenimiento y Montaje",
          icon: "fas fa-wrench",
          items: ["Mantenimiento preventivo y correctivo de sub estaciones eléctricas.", "Montaje de transformadores de potencia."]
        },
        {
          title: "Pruebas Especializadas",
          icon: "fas fa-vial",
          items: ["Análisis del aceite dieléctrico."]
        }
      ]}
      benefits={[
        {
          title: "Seguridad Industrial",
          text: "Protocolos estrictos de seguridad para trabajos en sistemas de media tensión.",
          icon: "fas fa-shield-alt"
        },
        {
          dark: true,
          title: "Tratamiento de Transformadores",
          text: "Análisis y tratamiento especializado de aceite dieléctrico para alargar la vida útil del transformador.",
          icon: "fas fa-oil-can"
        }
      ]}
    />
  );
};

export default SistemaMediaTension;

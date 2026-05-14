import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const SistemaMediaTension = () => {
  return (
    <ServiceLayout
      title="Sistema de <span>Media Tensión</span>"
      subtitle="Proyectos y mantenimiento en media tensión"
      description="Ejecución de proyectos de impacto, montajes y mantenimiento preventivo-correctivo de subestaciones eléctricas, con personal calificado."
      image="/img/hero/IMG_2177.webp"
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

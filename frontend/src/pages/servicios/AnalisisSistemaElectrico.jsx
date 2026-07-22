import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const AnalisisSistemaElectrico = () => {
  return (

    <ServiceLayout
      title="Mantenimiento <span>Eléctrico</span>"
      subtitle="Diagnóstico, reparación y automatización"
      description="Evaluamos a profundidad el estado de su sistema eléctrico para prevenir paradas inesperadas y optimizar el consumo de energía en sus instalaciones."
      points={[
        "Diagnóstico de fallas operativas",
        "Diagnóstico de fugas eléctricas",
        "Instalación, mantenimiento y reparación",
        "Diseño de planos eléctricos",
        "Diseño de sistemas automatizados (variadores, PLC)",
        "Mantenimiento eléctrico general"
      ]}
      images={[
        "IMG_6794.webp",
        "IMG_2142.webp",
        "IMG_5521.webp",
        "IMG_0465.webp",
        "IMG_5995.webp",
        "IMG_1211.webp"
      ]}
      highlights={[
        {
          title: "Diagnóstico y Reparación",
          icon: "fas fa-search",
          items: ["Diagnóstico de fugas eléctricas", "Diagnóstico de fallas operativas", "Instalación, mantenimiento y reparación"]
        },
        {
          title: "Diseño e Instalación",
          icon: "fas fa-drafting-compass",
          items: ["Diseño de planos eléctricos", "Instalación de variadores de velocidad de motores", "Diseño de sistemas automáticos PLC"]
        },
        {
          title: "Mantenimiento Continuo",
          icon: "fas fa-tools",
          items: ["Mantenimiento eléctrico general"]
        }
      ]}
      benefits={[
        {
          title: "Prevención Integral",
          text: "Identificación temprana de defectos que podrían convertirse en problemas mayores.",
          icon: "fas fa-clipboard-check"
        },
        {
          dark: true,
          title: "Eficiencia y Control",
          text: "Soluciones de automatización, PLC y variadores para optimización operativa total.",
          icon: "fas fa-microchip"
        }
      ]}
    />
  );
};

export default AnalisisSistemaElectrico;

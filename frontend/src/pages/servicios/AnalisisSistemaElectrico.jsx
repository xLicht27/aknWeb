import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const AnalisisSistemaElectrico = () => {
  return (

    <ServiceLayout
      title="Análisis del <span>Sistema Eléctrico</span>"
      subtitle="Diagnóstico y corrección de fallas"
      description="Evaluamos a profundidad el estado de su sistema eléctrico para prevenir paradas inesperadas y optimizar el consumo de energía en sus instalaciones."
      image="/img/placeholder.jpg"
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

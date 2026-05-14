import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const EquiposProteccion = () => {
  return (
    <ServiceLayout
      title="Equipos de <span>Protección</span>"
      subtitle="Instalación y mantenimiento especializado"
      description="Proteja sus equipos más sensibles contra picos de voltaje e inestabilidades de la red mediante equipos de protección eficientes y comprobados."
      image="/img/hero/IMG_5995.webp"
      highlights={[
        {
          title: "Sistemas de Protección",
          icon: "fas fa-shield-virus",
          items: ["Transformadores de aislamiento", "UPS y baterías", "Estabilizadores"]
        },
        {
          title: "Seguridad y Normativa",
          icon: "fas fa-hard-hat",
          items: ["Sistema de puesta a tierra", "Protocolos de operatividad"]
        }
      ]}
      benefits={[
        {
          title: "Garantía Operativa",
          text: "Mantenimiento riguroso de UPS y baterías para que la carga crítica nunca se interrumpa.",
          icon: "fas fa-battery-full"
        },
        {
          dark: true,
          title: "Sistemas a Tierra",
          text: "Instalación y medición de pozos a tierra cumpliendo con protocolos de operatividad vigentes.",
          icon: "fas fa-ruler-combined"
        }
      ]}
    />
  );
};

export default EquiposProteccion;

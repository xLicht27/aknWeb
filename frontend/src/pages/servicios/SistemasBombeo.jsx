import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const SistemasBombeo = () => {
  return (
    <ServiceLayout
      title="Sistemas de <span>Bombeo</span>"
      subtitle="Soluciones hidráulicas y electromecánicas"
      description="Ofrecemos servicios de mantenimiento, diseño e implementación para garantizar la presión y el flujo constante de agua o fluidos en su proyecto industrial o residencial."
      image="/img/placeholder.jpg"
      highlights={[
        {
          title: "Mantenimiento Preventivo",
          icon: "fas fa-tools",
          items: ["Mantenimiento preventivo de electrobombas y bombas sumergibles."]
        },
        {
          title: "Mantenimiento Correctivo",
          icon: "fas fa-wrench",
          items: ["Mantenimiento correctivo de electrobombas y bombas sumergibles.", "Mantenimiento y corrección de tuberias de agua."]
        },
        {
          title: "Diseño de Sistemas",
          icon: "fas fa-water",
          items: ["Diseño e implementacion de sistemas de bombeo."]
        }
      ]}
      benefits={[
        {
          title: "Optimización de Flujo",
          text: "Diseños enfocados en minimizar pérdidas de carga y maximizar la eficiencia de los motores.",
          icon: "fas fa-faucet"
        },
        {
          dark: true,
          title: "Intervención de Tuberías",
          text: "Corrección rápida de fugas y reestructuración de redes de tuberías para sistemas de alta presión.",
          icon: "fas fa-layer-group"
        }
      ]}
    />
  );
};

export default SistemasBombeo;

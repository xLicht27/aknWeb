import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const GruposElectrogenos = () => {
  return (
    <ServiceLayout
      title="Grupos <span>Electrógenos</span>"
      subtitle="Respaldo de energía ininterrumpida"
      description="Ofrecemos suministro, instalación y un plan completo de mantenimiento para sus grupos electrógenos, asegurando la energía en el momento que más la necesita."
      image="/img/placeholder.jpg"
      highlights={[
        {
          title: "Servicios Principales",
          icon: "fas fa-power-off",
          items: ["Instalación de Grupos Electrógenos", "Mantenimiento correctivo de G.E.", "Mantenimiento preventivo de G.E."]
        }
      ]}
      benefits={[
        {
          title: "Energía Continua",
          text: "Sistemas de respaldo confiables para hospitales, industrias, comercios y telecomunicaciones.",
          icon: "fas fa-bolt"
        },
        {
          dark: true,
          title: "Mantenimiento Preventivo",
          text: "Planes programados para asegurar la disponibilidad total de sus equipos ante fallos de red.",
          icon: "fas fa-wrench"
        }
      ]}
    />
  );
};

export default GruposElectrogenos;

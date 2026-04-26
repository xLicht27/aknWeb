import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const EficienciaEnergetica = () => {
  return (
    <ServiceLayout
      title="Eficiencia <span>Energética</span>"
      subtitle="Optimización y energías renovables"
      description="Ahorre costos operativos y reduzca su huella de carbono mediante la implementación de soluciones energéticas modernas y optimización tarifaria."
      image="/img/placeholder.jpg"
      highlights={[
        {
          title: "Energías Renovables",
          icon: "fas fa-sun",
          items: ["Diseño y ejecución de proyectos utilizando energías renovables."]
        },
        {
          title: "Optimización de Consumo",
          icon: "fas fa-lightbulb",
          items: ["Instalación de iluminación LED.", "Diseño de optimización tarifaria."]
        },
        {
          title: "Calidad de Energía",
          icon: "fas fa-battery-bolt",
          items: ["Instalación de banco de condensadores."]
        }
      ]}
      benefits={[
        {
          title: "Sostenibilidad",
          text: "Inversiones rentables orientadas al cuidado del medio ambiente y a la eficiencia corporativa.",
          icon: "fas fa-leaf"
        },
        {
          dark: true,
          title: "Bancos de Condensadores",
          text: "Corrección de factor de potencia para evitar penalidades tarifarias y optimizar el sistema eléctrico.",
          icon: "fas fa-chart-line"
        }
      ]}
    />
  );
};

export default EficienciaEnergetica;

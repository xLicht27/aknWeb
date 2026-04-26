import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const TablerosElectricos = () => {
  return (
    <ServiceLayout
      title="Tableros <span>Eléctricos</span>"
      subtitle="Instalación y mantenimiento especializado"
      description="Brindamos soluciones integrales para la instalación y mantenimiento de tableros eléctricos en diversos sectores, asegurando la continuidad del servicio y la protección de su infraestructura."
      image="/img/placeholder.jpg"
      highlights={[
        {
          title: "Sectores de Aplicación",
           icon: "fas fa-industry",
          items: ["Industria", "Residenciales", "Minería", "Telecomunicaciones"]
        },
        {
          title: "Especialidades",
           icon: "fas fa-cogs",
          items: ["Control y automatización", "Data center y climatización"]
        },
        {
          title: "Componentes Adicionales",
           icon: "fas fa-solar-panel",
          items: ["Transferencia automática", "Bandejas y canaletas"]
        }
      ]}
      benefits={[
        {
          title: "Alta Confiabilidad",
          text: "Diseños robustos para asegurar el correcto funcionamiento bajo condiciones exigentes.",
          icon: "fas fa-shield-alt"
        },
        {
          dark: true,
          title: "Sincronismo y Transferencia",
          text: "Implementación de sistemas de automatización modernos para transferencia de carga y control eficiente.",
          icon: "fas fa-exchange-alt"
        }
      ]}
    />
  );
};

export default TablerosElectricos;

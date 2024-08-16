import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img 
            src="Foto_CV.jpg"
            alt="Lucas Romero" 
            className="rounded-full w-32 h-32 md:w-48 md:h-48 object-contain mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre mi</h2>
          <p className="text-lg text-gray-700 mb-4">
          Hola, soy Lucas Romero, un apasionado desarrollador web dedicado a crear aplicaciones web dinámicas y receptivas. 
          Con una sólida experiencia tanto en el desarrollo front-end como en el back-end, me encanta resolver problemas complejos y construir soluciones innovadoras.
          </p>
          <p className="text-lg text-gray-700">
            Mi objetivo principal es avanzar continuamente en mi carrera al adoptar nuevas tecnologías y metodologías. 
            Estoy comprometido con alcanzar la excelencia en mi campo y aplicar mis habilidades de manera efectiva para entregar resultados de alta calidad.
            Fuera del trabajo, disfruto siendo autodidacta, explorando las últimas tendencias tecnológicas y leyendo libros relacionados con la industria. 
            También me gusta contribuir a proyectos de código abierto y mentorando a desarrolladores en ciernes. 
            Creo en el poder de la tecnología para generar un cambio positivo y siempre estoy ansioso por aprender y crecer en esta industria en constante evolución.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

import { useEffect, useMemo, useState } from 'react'
import './App.css'

import logo from './assets/logo-dc-web.png'
import workspace from './assets/dario-workspace.jpg'

import turnofacilServicios from './assets/turnofacil-servicios.webp'
import turnofacilFecha from './assets/turnofacil-fecha.webp'
import tramaNidoTienda from './assets/trama-nido-tienda.webp'
import tramaNidoAdmin from './assets/trama-nido-admin.webp'

import canchaClub from './assets/canchasya-club.webp'
import canchaReserva from './assets/canchasya-reserva.webp'
import canchaConfirmacion from './assets/canchasya-confirmacion.png'

import ctrlMenu from './assets/ctrlcash-menu.webp'
import ctrlDashboard from './assets/ctrlcash-dashboard.webp'
import ctrlMovimientos from './assets/ctrlcash-movimientos.webp'
import ctrlObjetivos from './assets/ctrlcash-objetivos.webp'
import ctrlGastos from './assets/ctrlcash-gastos.webp'

import burningPortada from './assets/burning-portada.webp'
import burningDashboard from './assets/burning-dashboard.webp'
import burningRutinas from './assets/burning-rutinas.webp'
import burningRapido from './assets/burning-rapido.webp'
import burningCronometro from './assets/burning-cronometro.webp'

import rominaWeb from './assets/romina-web.webp'
import marielaWeb from './assets/mariela-web.webp'
import jonathanWeb from './assets/jonathan-web.webp'

import fotoLiveHero from './assets/fotolive-hero.png'
import fotoLiveDemo from './assets/fotolive-demo.png'
import fotoLivePanel from './assets/fotolive-panel.png'
import fotoLiveConfig from './assets/fotolive-config.png'
import fotoLiveInvitados from './assets/fotolive-invitados.png'

import dritoReportes from './assets/drito-reportes.png'
import dritoCaja from './assets/drito-caja.png'
import dritoCuentas from './assets/drito-cuentas-corrientes.png'
import dritoRobot from './assets/drito-robot.webp'
import dritoMarca from './assets/drito-marca.webp'

const CONTACT = {
  whatsapp: 'https://wa.me/5492983419423?text=Hola%20Dario%2C%20vi%20tu%20portfolio%20de%20DC%20Web%20y%20quisiera%20consultarte%20por%20una%20p%C3%A1gina%20web.',
  email: 'mailto:dariowcabrera@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dario-cabrera3105',
  github: 'https://github.com/DarioWCabrera',
  instagram: 'https://www.instagram.com/dariocabrera.dev',
}

const services = [
  {
    icon: '01',
    title: 'Sitios web profesionales',
    text: 'Páginas claras, modernas y pensadas para transmitir confianza desde el primer contacto.',
  },
  {
    icon: '02',
    title: 'Aplicaciones web',
    text: 'Herramientas con lógica, usuarios, datos y funcionalidades adaptadas a una necesidad real.',
  },
  {
    icon: '03',
    title: 'Diseño responsive',
    text: 'Experiencias que se adaptan correctamente a celulares, tablets y computadoras.',
  },
  {
    icon: '04',
    title: 'WhatsApp y redes',
    text: 'Integración de canales de contacto para que tus clientes puedan comunicarse fácilmente.',
  },
  {
    icon: '05',
    title: 'Dominio y publicación',
    text: 'Configuración del dominio, despliegue del sitio y acompañamiento durante la puesta online.',
  },
  {
    icon: '06',
    title: 'Mantenimiento web',
    text: 'Actualizaciones de contenido, imágenes, enlaces y mejoras según evolucione tu proyecto.',
  },
]

const projects = [
  {
    id: 'drito',
    title: 'Drito',
    category: 'Sistema web de gestión comercial',
    status: 'Producto Full Stack',
    featured: true,
    cover: dritoReportes,
    images: [dritoReportes, dritoCaja, dritoCuentas, dritoRobot, dritoMarca],
    video: '/videos/drito-demo.mp4',
    summary:
      'Sistema de gestión para centralizar ventas, caja, stock, clientes, proveedores, cuentas corrientes y análisis financiero desde un solo lugar.',
    description: [
      'Drito es un sistema web de gestión desarrollado para comercios y pequeñas empresas que necesitan ordenar su operación diaria dentro de una única plataforma.',
      'La solución integra clientes, productos, proveedores, compras, caja, gastos, reportes, stock, cotizaciones, ventas y cuentas corrientes, con usuarios y permisos para acompañar distintos roles dentro del negocio.',
      'Además de registrar la actividad, Drito transforma los movimientos del comercio en información útil mediante reportes financieros, seguimiento de ingresos y egresos y control de saldos. La arquitectura está pensada para crecer y sumar nuevas funcionalidades e integraciones.',
    ],
    highlights: [
      'Clientes, productos y proveedores',
      'Compras, ventas y cotizaciones',
      'Stock y movimientos',
      'Caja, gastos y cuentas corrientes',
      'Reportes y análisis financiero',
      'Usuarios, roles y permisos',
      'Arquitectura preparada para integraciones',
    ],
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Supabase', 'Full Stack'],
  },
  {
    id: 'fotolive',
    title: 'FotoLive',
    category: 'Plataforma interactiva para eventos',
    status: 'Demo funcional',
    featured: true,
    cover: fotoLiveHero,
    images: [fotoLiveHero, fotoLiveDemo, fotoLivePanel, fotoLiveConfig, fotoLiveInvitados],
    summary:
      'Experiencia para eventos que permite a los invitados compartir fotos desde su celular y proyectarlas en vivo con moderación asistida por IA.',
    description: [
      'FotoLive transforma las fotografías de los invitados en una experiencia participativa durante el evento. Desde un QR pueden ingresar con su celular, tomar una foto o elegirla desde la galería y enviarla junto con un nombre o mensaje, sin descargar aplicaciones.',
      'Del lado profesional, el DJ u organizador cuenta con un panel para controlar la recepción de fotografías, revisar el contenido, administrar el evento y abrir la pantalla de proyección en tiempo real.',
      'Uno de los puntos centrales del proyecto es la moderación asistida por IA: el sistema puede ayudar a identificar fotografías seguras para agilizar su aprobación, mientras que el contenido dudoso queda disponible para revisión humana. De esta manera se automatiza parte del flujo sin perder el control del evento.',
    ],
    highlights: [
      'Participación mediante QR, sin descargar apps',
      'Carga de fotos y mensajes desde el celular',
      'Proyección de fotografías en tiempo real',
      'Panel profesional para DJ u organizador',
      'Moderación manual y asistida por IA',
      'Revisión humana del contenido dudoso',
      'Personalización visual de cada evento',
    ],
    technologies: ['React', 'JavaScript', 'IA aplicada', 'Diseño responsive', 'Experiencia en tiempo real'],
  },
  {
    id: 'turnofacil',
    title: 'TurnoFácil',
    category: 'Sistema de turnos para comercios',
    status: 'Demo comercial en local',
    featured: true,
    cover: turnofacilServicios,
    images: [turnofacilServicios, turnofacilFecha],
    summary:
      'Turnero online adaptable a barberías, peluquerías, centros de estética y otros negocios que trabajan con reservas.',
    description: [
      'TurnoFácil es una demostración comercial creada para mostrar cómo un negocio puede reemplazar los mensajes de ida y vuelta por un proceso de reserva simple y ordenado.',
      'El cliente puede elegir un servicio, seleccionar al profesional, consultar fechas y horarios disponibles y completar sus datos para confirmar el turno desde el celular o la computadora.',
      'La propuesta incluye un panel para el comercio y está preparada para evolucionar hacia una conexión con respuestas automáticas de WhatsApp y una base de datos en Supabase. El diseño puede personalizarse para diferentes marcas y rubros.',
    ],
    highlights: [
      'Selección de servicio y profesional',
      'Calendario y horarios disponibles',
      'Bloqueo de turnos ocupados',
      'Panel de gestión para el comercio',
      'Diseño adaptable a cada rubro',
      'Preparado para WhatsApp y Supabase',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Diseño responsive', 'Supabase'],
  },
  {
    id: 'trama-nido',
    title: 'Trama Nido',
    category: 'Tienda online autoadministrable',
    status: 'Sitio publicado',
    featured: true,
    cover: tramaNidoTienda,
    images: [tramaNidoTienda, tramaNidoAdmin],
    liveUrl: 'https://trama-nido.netlify.app/',
    summary:
      'Tienda digital para una marca de prendas artesanales, con carrito de compras y panel privado de administración.',
    description: [
      'Trama Nido es una tienda online desarrollada para presentar y comercializar prendas tejidas artesanalmente mediante una identidad visual cálida y personalizada.',
      'La experiencia organiza productos de entrega inmediata y trabajos a pedido, incorpora carrito de compras, contacto por WhatsApp y una navegación responsive pensada para celulares y computadoras.',
      'Además, cuenta con un acceso privado conectado con Supabase para que la propietaria pueda administrar el contenido de la tienda sin tener que modificar directamente el código del sitio.',
    ],
    highlights: [
      'Catálogo de productos',
      'Carrito de compras',
      'Entrega inmediata y trabajos a pedido',
      'Panel privado de administración',
      'Autenticación con Supabase',
      'Contacto directo por WhatsApp',
    ],
    technologies: ['React', 'Supabase', 'JavaScript', 'CSS', 'E-commerce'],
  },
  {
    id: 'canchasya',
    title: 'CanchasYa!',
    category: 'Plataforma Full Stack colaborativa',
    status: 'Proyecto académico en equipo',
    featured: true,
    cover: canchaReserva,
    images: [canchaReserva, canchaConfirmacion, canchaClub],
    summary:
      'Plataforma de reservas deportivas que conecta usuarios y clubes, centralizando turnos, pagos, ubicaciones y administración.',
    description: [
      'CanchasYa! fue desarrollada de manera colaborativa para simplificar la reserva de turnos deportivos y la gestión cotidiana de los clubes.',
      'El usuario selecciona un deporte y la plataforma filtra los clubes que ofrecen esa disciplina. Luego puede elegir cancha, fecha y horario, confirmar el turno y optar por pagar mediante Mercado Pago o directamente en el club. La reserva también incluye un mapa con la ubicación para facilitar la llegada.',
      'Desde el panel del propietario, el club puede concentrar reservas e ingresos diarios y mensuales en un solo lugar, administrar canchas, precios y disponibilidad, y gestionar torneos, entre otras funcionalidades.',
    ],
    highlights: [
      'Filtros por deporte y clubes compatibles',
      'Reserva por cancha, fecha y horario',
      'Pago online o presencial',
      'Mapa con ubicación del club',
      'Panel de gestión para propietarios',
      'Administración de canchas, ingresos y torneos',
    ],
    technologies: ['React', 'NestJS', 'TypeScript', 'Base de datos', 'Git y GitHub'],
  },
  {
    id: 'ctrlcash',
    title: 'Ctrl Cash',
    category: 'Aplicación de finanzas familiares',
    status: 'Proyecto personal',
    featured: true,
    cover: ctrlDashboard,
    images: [ctrlDashboard, ctrlMovimientos, ctrlObjetivos, ctrlGastos, ctrlMenu],
    summary:
      'Aplicación para registrar ingresos, gastos, objetivos y pagos recurrentes de manera compartida con el grupo familiar.',
    description: [
      'Ctrl Cash nació como una herramienta para organizar la economía familiar desde una interfaz simple y accesible.',
      'Permite registrar ingresos y egresos, visualizar resúmenes mensuales, controlar gastos fijos y crear objetivos de ahorro. Su propuesta central es que la información pueda compartirse con el grupo familiar para ordenar las decisiones económicas desde un mismo lugar.',
    ],
    highlights: [
      'Registro de ingresos y egresos',
      'Resumen mensual de finanzas',
      'Gastos fijos y movimientos',
      'Objetivos de ahorro',
      'Organización familiar compartida',
      'Diseño optimizado para celulares',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Diseño responsive', 'Gestión de estado'],
  },
  {
    id: 'burning-fat',
    title: 'Burning Fat',
    category: 'Aplicación de entrenamiento',
    status: 'Proyecto personal',
    featured: true,
    cover: burningDashboard,
    images: [burningPortada, burningDashboard, burningRutinas, burningRapido, burningCronometro],
    summary:
      'Aplicación mobile-first para realizar rutinas rápidas, crear entrenamientos personalizados y seguir la evolución del usuario.',
    description: [
      'Burning Fat fue creada para resolver una necesidad personal: entrenar de manera rápida y organizada sin depender de varias herramientas diferentes.',
      'La aplicación incluye rutinas listas para comenzar y permite cargar circuitos personalizados, definir rondas y ejercicios, editar o duplicar entrenamientos y consultar el historial de actividad.',
      'Durante cada sesión incorpora un cronómetro visual para los ejercicios por tiempo, muestra las rondas y anticipa el siguiente movimiento. Además, analiza la actividad registrada y devuelve mensajes relacionados con la constancia y las mejoras detectadas.',
    ],
    highlights: [
      'Rutinas rápidas prediseñadas',
      'Creación de circuitos personalizados',
      'Control de rondas y ejercicios',
      'Cronómetro integrado',
      'Historial de sesiones y minutos activos',
      'Feedback de constancia y evolución',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Mobile-first', 'Persistencia de datos'],
  },
  {
    id: 'romina',
    title: 'Romina Ávila',
    category: 'Sitio web profesional para counselor',
    status: 'En etapa final',
    cover: rominaWeb,
    images: [rominaWeb],
    summary:
      'Sitio cálido y profesional para presentar su propuesta de acompañamiento y facilitar el contacto.',
    description: [
      'Sitio web desarrollado para comunicar con claridad la propuesta profesional de una counselor, explicar cómo son los encuentros y acercar sus medios de contacto.',
      'El proyecto prioriza una navegación simple, una estética cercana y una experiencia responsive. El dominio público todavía no se comparte porque la presentación se encuentra en proceso de finalización junto a la profesional.',
    ],
    highlights: ['Diseño personalizado', 'Contenido organizado', 'Responsive', 'Contacto por WhatsApp'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
  },
  {
    id: 'mariela',
    title: 'Mariela Boglione',
    category: 'Sitio web profesional para counselor',
    status: 'En etapa final',
    cover: marielaWeb,
    images: [marielaWeb],
    summary:
      'Presencia digital con una estética suave, identidad propia y accesos directos a los medios de contacto.',
    description: [
      'Proyecto desarrollado para presentar el enfoque, los servicios y la identidad profesional de una counselor mediante una experiencia visual clara y accesible.',
      'La web está adaptada a distintos dispositivos y se encuentra en etapa de cierre. El dominio público todavía no se comparte hasta completar el proceso final junto a la profesional.',
    ],
    highlights: ['Identidad visual', 'Diseño responsive', 'WhatsApp y correo', 'Navegación clara'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
  },
  {
    id: 'jonathan',
    title: 'Jonathan Garcetti',
    category: 'Sitio web profesional para counselor',
    status: 'En etapa final',
    cover: jonathanWeb,
    images: [jonathanWeb],
    summary:
      'Sitio con identidad personalizada para comunicar procesos, servicios y modalidad de acompañamiento.',
    description: [
      'Sitio web diseñado para presentar la mirada profesional, los procesos y la modalidad de trabajo de un counselor con una estética diferenciada.',
      'La estructura organiza una gran cantidad de información sin perder claridad. El dominio público todavía no se comparte porque el proyecto se encuentra en proceso de finalización.',
    ],
    highlights: ['Diseño editorial', 'Identidad personalizada', 'Estructura completa', 'Responsive'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
  },
]

const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Vite',
  'Node.js',
  'NestJS',
  'MySQL',
  'PostgreSQL',
  'Supabase',
  'Git',
  'GitHub',
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-9 9M19 13v6H5V5h6" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), [])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const openProject = (project) => {
    setActiveImage(0)
    setSelectedProject(project)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="DC Web, ir al inicio">
            <img src={logo} alt="Logo de DC Web" />
            <span>
              <strong>DC Web</strong>
              <small>Dario Cabrera</small>
            </span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <MenuIcon open={menuOpen} />
          </button>

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
            <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <a className="nav-cta" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              Consultar
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Desarrollador Web Full Stack</span>
              <h1>
                Ideas que se transforman en <span>soluciones digitales reales.</span>
              </h1>
              <p>
                Desarrollo sitios web y aplicaciones modernas para profesionales, emprendimientos y pequeños negocios, combinando diseño, funcionalidad y atención personalizada.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#proyectos">
                  Ver proyectos <ArrowIcon />
                </a>
                <a className="button button-secondary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                  Consultar por WhatsApp
                </a>
              </div>
              <div className="hero-stats" aria-label="Información profesional destacada">
                <div><strong>Proyectos</strong><span>reales y en desarrollo</span></div>
                <div><strong>Full Stack</strong><span>frontend y backend</span></div>
                <div><strong>100%</strong><span>adaptado a celulares</span></div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Presentación visual de DC Web">
              <div className="hero-logo-card">
                <img src={logo} alt="DC Web" />
              </div>
              <div className="floating-card floating-card-top">
                <span className="floating-dot" />
                Diseño responsive
              </div>
              <div className="floating-card floating-card-bottom">
                <span className="code-mark">&lt;/&gt;</span>
                Desarrollo a medida
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicios">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Servicios</span>
              <h2>Una solución digital pensada para cada etapa de tu proyecto.</h2>
              <p>
                Desde una web profesional para comenzar hasta una aplicación con funcionalidades específicas.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="container">
            <div className="section-heading projects-heading">
              <div>
                <span className="eyebrow">Portfolio</span>
                <h2>Proyectos que combinan diseño, lógica y necesidades reales.</h2>
              </div>
              <p>
                Soluciones comerciales, aplicaciones completas, herramientas personales y sitios profesionales desarrollados para necesidades diferentes.
              </p>
            </div>

            <div className="projects-showcase">
              <div className="featured-grid">
                {featuredProjects.map((project) => (
                  <article className="project-card project-card-featured" key={project.id}>
                    <button className="project-image-button" type="button" onClick={() => openProject(project)} aria-label={`Ver detalles de ${project.title}`}>
                      <img src={project.cover} alt={`Vista previa de ${project.title}`} />
                      <span className="image-overlay">Explorar proyecto</span>
                    </button>
                    <div className="project-content">
                      <div className="project-meta">
                        <span>{project.category}</span>
                        <span className="status-badge">{project.status}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <div className="project-tags">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                      <div className="project-actions">
                        <button className="text-button" type="button" onClick={() => openProject(project)}>
                          Conocer el proyecto <ArrowIcon />
                        </button>
                        {project.liveUrl && (
                          <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                            Ver sitio <ExternalIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="institutional-title">
              <span className="eyebrow">Sitios profesionales</span>
              <h3>Presencia digital personalizada para cada profesional.</h3>
              <p>Propuestas creadas con una identidad visual propia, una estructura clara y una experiencia adaptada a cada profesional.</p>
            </div>

            <div className="institutional-grid">
              {projects.filter((project) => !project.featured).map((project) => (
                <article className="project-card project-card-compact" key={project.id}>
                  <button className="project-image-button" type="button" onClick={() => openProject(project)} aria-label={`Ver detalles de ${project.title}`}>
                    <img src={project.cover} alt={`Vista previa de ${project.title}`} />
                    <span className="image-overlay">Vista previa</span>
                  </button>
                  <div className="project-content">
                    <span className="status-badge">{project.status}</span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <button className="text-button" type="button" onClick={() => openProject(project)}>
                      Ver detalles <ArrowIcon />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre-mi">
          <div className="about-image" role="img" aria-label="Espacio de trabajo de Dario Cabrera, con código y CanchasYa en pantalla" style={{ backgroundImage: `url(${workspace})` }}>
            <div className="about-overlay" />
          </div>
          <div className="container about-content-wrap">
            <div className="about-content">
              <span className="eyebrow eyebrow-light">Sobre mí</span>
              <h2>Una nueva etapa construida con esfuerzo.</h2>
              <p>
                Después de años trabajando en otro rubro, decidí apostar por un nuevo camino profesional. Estudié, aprendí, me equivoqué, volví a intentar y hoy soy <strong>Desarrollador Web Full Stack</strong>.
              </p>
              <p>
                Cada proyecto representa mucho más que código: demuestra que nunca es tarde para aprender, reinventarse y construir nuevas oportunidades.
              </p>
              <blockquote>
                “Transformar una idea en una solución real es lo que más me apasiona del desarrollo web.”
              </blockquote>
              <div className="about-actions">
                <a className="button button-light" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                  Ver LinkedIn <ExternalIcon />
                </a>
                <a className="button button-ghost-light" href={CONTACT.github} target="_blank" rel="noreferrer">
                  Ver GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section technologies-section">
          <div className="container technologies-layout">
            <div className="section-heading technology-copy">
              <span className="eyebrow">Tecnologías</span>
              <h2>Herramientas para construir desde la interfaz hasta los datos.</h2>
              <p>
                Trabajo con tecnologías frontend, backend, bases de datos y control de versiones para desarrollar soluciones completas.
              </p>
            </div>
            <div className="technology-cloud" aria-label="Tecnologías utilizadas">
              {technologies.map((technology, index) => (
                <span key={technology} className={index % 4 === 0 ? 'is-accent' : ''}>{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="container contact-card">
            <div>
              <span className="eyebrow eyebrow-light">Contacto</span>
              <h2>¿Tenés una idea o necesitás una página para tu actividad?</h2>
              <p>
                Contame qué necesitás. Podemos conversar sobre el alcance, los tiempos y la mejor forma de llevar tu proyecto a internet.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light contact-main" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                Escribirme por WhatsApp <ArrowIcon />
              </a>
              <div className="contact-links">
                <a href={CONTACT.email}>Correo</a>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a className="brand footer-brand" href="#inicio">
            <img src={logo} alt="" />
            <span><strong>DC Web</strong><small>Dario Cabrera</small></span>
          </a>
          <p>© {new Date().getFullYear()} DC Web. Desarrollo web desde Tres Arroyos para cualquier lugar.</p>
        </div>
      </footer>

      <a className="whatsapp-float" href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <span>WA</span>
      </a>

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null)
        }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
            <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Cerrar detalle del proyecto">×</button>
            <div className="modal-gallery">
              <div className="modal-main-image">
                <img src={selectedProject.images[activeImage]} alt={`Captura ${activeImage + 1} de ${selectedProject.title}`} />
              </div>
              {selectedProject.images.length > 1 && (
                <div className="modal-thumbnails">
                  {selectedProject.images.map((image, index) => (
                    <button
                      type="button"
                      key={`${selectedProject.id}-${index}`}
                      className={activeImage === index ? 'is-active' : ''}
                      onClick={() => setActiveImage(index)}
                      aria-label={`Ver captura ${index + 1}`}
                    >
                      <img src={image} alt="" />
                    </button>
                  ))}
                </div>
              )}
              {selectedProject.video && (
                <div className="modal-video-block">
                  <span className="modal-video-label">Presentación del proyecto</span>
                  <video className="modal-video" controls preload="metadata" playsInline>
                    <source src={selectedProject.video} type="video/mp4" />
                    Tu navegador no puede reproducir este video.
                  </video>
                </div>
              )}
            </div>
            <div className="modal-content">
              <div className="project-meta">
                <span>{selectedProject.category}</span>
                <span className="status-badge">{selectedProject.status}</span>
              </div>
              <h2 id="modal-project-title">{selectedProject.title}</h2>
              {selectedProject.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>Funcionalidades destacadas</h3>
              <ul className="highlight-list">
                {selectedProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="project-tags modal-tags">
                {selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="modal-actions">
                {selectedProject.liveUrl && (
                  <a className="button button-primary modal-cta" href={selectedProject.liveUrl} target="_blank" rel="noreferrer">
                    Visitar sitio publicado <ExternalIcon />
                  </a>
                )}
                <a className={`button modal-cta ${selectedProject.liveUrl ? 'button-outline-dark' : 'button-primary'}`} href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                  Consultar por uno similar <ArrowIcon />
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
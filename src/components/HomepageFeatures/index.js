import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Almacenamiento seguro de contraseñas',
    Svg: require('@site/static/img/img3.svg').default,
    description: (
      <>
        Permite guardar todas tus contraseñas en un solo lugar protegido por una contraseña maestra. 
        La información se guarda cifrada.
      </>
    ),
  },
  {
    title: 'Compartir contraseñas de forma segura',
    Svg: require('@site/static/img/img2.svg').default,
    description: (
      <>
        Muchos gestores de contraseñas permiten compartir credenciales 
        con otras personas sin revelar directamente la contraseña.
      </>
    ),
  },
  {
    title: 'Generador de contraseñas fuertes',
    Svg: require('@site/static/img/img1.svg').default,
    description: (
      <>
        Crea contraseñas seguras y aleatorias con un solo clic. 
        Puedes personalizar la longitud y los caracteres para adaptarlas a los requisitos de cada sitio web.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

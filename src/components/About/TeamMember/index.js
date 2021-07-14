import styles from './index.module.scss';
import { Facebook, Twitter, Linkedin, Instagram } from '~/src/components/icons';

const TeamMember = ({
  name,
  avatar,
  designation,
  bio,
  facebookUrl,
  twitterUrl,
  linkedinUrl,
  instagramUrl
}) => {
  return (
    <div className={styles.team}>
      <figure className={styles.team__avatar}>
        <img src={avatar} alt={name} />

        <figcaption className={styles.team__bio}>
          <h4 className={styles.team__name}>{name || ''}</h4>
          <span className={styles.team__designation}>{designation || ''}</span>
          <p>{bio || ''}</p>
          <div className={styles.team__social}>
            <ul>
              <li>
                <a href={`${facebookUrl || '#'}`}>
                  <Facebook />
                </a>
              </li>

              <li>
                <a href={`${twitterUrl || '#'}`}>
                  <Twitter />
                </a>
              </li>

              <li>
                <a href={`${linkedinUrl || '#'}`}>
                  <Linkedin />
                </a>
              </li>

              <li>
                <a href={`${instagramUrl || '#'}`}>
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TeamMember;

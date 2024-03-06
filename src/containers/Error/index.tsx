import { useNavigate } from 'react-router-dom';

import { useBackgroundPosition } from 'hooks';
import { Button, Typography } from 'components';

import styles from './Error.module.scss';

const Error = () => {
  const navigate = useNavigate();

  const { ref, handleMouseOver } = useBackgroundPosition();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container} ref={ref} onMouseMove={handleMouseOver}>
        <div className={styles.wrapper__container__content}>
          <Typography variant='h2'>404</Typography>
          <Typography variant='h4'>Oops! Page not found</Typography>
          <Typography className={styles.wrapper__container__content__description}>
            {`Sorry, but the URL you entered doesn't lead to a valid page. Please return to the
          homepage and make sure you've entered the correct URL.`}
          </Typography>
          <Button
            role='button'
            className={styles.wrapper__container__content__link}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;

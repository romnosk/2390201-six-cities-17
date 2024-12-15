import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/const/const';

function PageNotFound (): JSX.Element {
  return (
    <div>
      <h1>Error 404<br/>Page not found</h1>
      <Link to={AppRoute.MAIN}>
        <span>Press to return to main page.</span>
      </Link>
    </div>
  );
}

export default PageNotFound;

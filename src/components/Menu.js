// Компанент Menu
import Recipe from './Recipe'
import MyButton from './MyButton'
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Media from 'react-bootstrap/lib/Media';
import '../styles/menu.css'

const Menu = ({recipes}) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <Button type="button" className="btn btn-danger">Опасность</Button>

        <MyButton name="btn btn-danger" text="Go" />
        <Media.Left>
            <img width={204}  src="../img/1.jpg" alt="thumbnail" />
        </Media.Left>
        <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
            good.
        </Alert>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>
export default Menu
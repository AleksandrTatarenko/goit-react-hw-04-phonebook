import PropTypes from 'prop-types';
import { Text, Button, Item } from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({name, number, deleteItem, id }) => {
    return (<Item>
        <Text>{name}: {number}</Text>
        <Button onClick={()=>deleteItem(id)}>Delete</Button>
    </Item>
    )
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};
import PropTypes from 'prop-types';
import { List } from 'components/Contacts/Contacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contacts = ({ contacts, deleteItem }) => {
    return (<div>
        <List>
            {contacts.map(({id, name, number}) => {
                return (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        deleteItem={deleteItem} />
                    )
                })}
        </List>
    </div>
    );     
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
    deleteItem: PropTypes.func.isRequired
};
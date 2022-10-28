import PropTypes from 'prop-types';
import { Container, Input, Text } from 'components/Filter/Filter.styled'

export const Filter = ({method, filter}) => {
    return (<Container>
        <Text>Find contacts by name</Text>
        <Input type='text' onChange={method} value={filter}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required></Input>
    </Container>
    )
}

Filter.propTypes = {
    method: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}
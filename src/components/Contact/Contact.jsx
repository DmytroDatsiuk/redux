import { Button, Input, Label, LabelText } from './Contact.styled';
// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteContact, toggleChoosen } from 'redux/actions';

export const Contact = ({ contact }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  // const handleDelete = () => dispatch(deleteContact(contact.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  // const handleToggle = () => dispatch(toggleChoosen(contact.id));
  return (
    <>
      <Label>
        <Input
          type="checkbox"
          onChange={() => dispatch(toggleChoosen(contact.id))}
          checked={contact.choosen}
          // checked
        />
        <LabelText>
          {contact.name}: {contact.number}
        </LabelText>
      </Label>

      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </>
  );
};

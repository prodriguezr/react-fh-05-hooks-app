import { useForm } from '../../hooks';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length < 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          className='form-control'
          placeholder='What will you do today?'
          autoComplete='off'
          onChange={handleInputChange}
          value={description}
        />
        <button
          disabled={description?.trim().length < 1}
          type='submit'
          className='btn btn-outline-primary mt-3 w-100'
        >
          Save
        </button>
      </form>
    </>
  );
};

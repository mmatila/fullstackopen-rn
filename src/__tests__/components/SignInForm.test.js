import { waitFor, render, fireEvent } from "@testing-library/react-native";

import { Form } from "../../components/SignInForm";

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', async () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText, debug } = render(<Form onSubmit={onSubmit} />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'username');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Sign in'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'username',
        password: 'password',
      });
    });
  });
});
import { render, screen } from "@testing-library/react"
import LoginForm from "../components/LoginForm"

test('Loginivormi esimene test', () =>{
    render(<LoginForm sender={{id: '5'}} reciever={{id: '5'}}/>);

    const linkElement = screen.findByRole('Button', { name: /Loginbutton/i });

    userEvent.type(screen.getByPlaceholderText(/kasutajanimi/i), "Peeter");
    userEvent.type(screen.getByPlaceholderText(/parool/i), "Peeter");
    expect(screen.findByRole('Button', { name: /Loginbutton/i }));


    //expect(screen.getByRole('button', {name: /login/})).toBeEnabled();
});
import { render, screen } from "@testing-library/react"
import RegisterForm from "../components/RegisterForm";

test('Registerformi esimene test', () =>{
    render(<RegisterForm sender={{id: '5'}} reciever={{id: '5'}}/>);

    const linkElement = screen.findByRole('Button', { name: /Registerbutton/i });

    userEvent.type(screen.getByPlaceholderText(/eesnimi/i), "Peeter");
    userEvent.type(screen.getByPlaceholderText(/perekonnanimi/i), "Peeter");
    userEvent.type(screen.getByPlaceholderText(/kasutajanimi/i), "Peeter");
    userEvent.type(screen.getByPlaceholderText(/parool/i), "Peeter");
    userEvent.type(screen.getByPlaceholderText(/kordaparooli/i), "Peeter");
    expect(screen.findByRole('Button', { name: /Registerbutton/i }));


    //expect(screen.getByRole('button', {name: /login/})).toBeEnabled();
});
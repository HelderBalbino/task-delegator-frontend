import Form from './form';
import { register } from '../../services/userService';

function Register() {
    const handleRegister = async (values: {
        name: string;
        email: string;
        password: string;

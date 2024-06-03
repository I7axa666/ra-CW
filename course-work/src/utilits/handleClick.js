import { useNavigate } from 'react-router-dom';
export default function handleClick(path) {
    const navigate = useNavigate();
    navigate(path)
}
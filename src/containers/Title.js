import styled from 'styled-components';

const Title = styled.h1`
    color: #f1f2f6
    font-size: 2.2em
    font-family: ${props => props.primary ? 'Passion One, cursive' : 'Bangers, cursive'}
`;

export default Title;
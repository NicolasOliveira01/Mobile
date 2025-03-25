import styled from "styled-components/native";
// precisa colocar o /native

export const theme = {
    color: {
        primary: "#4A6FA5",
        secondary: "#6AB8c42",
        background: "#FFFFFF"
    }
}

// Container vai se tornar um componente e sempre com a primeira letra maiúscula
export const Container = styled.View`
    background-color: ${theme.color.background};
    border-radius: 12px;
    padding: 16px;
    margin: 16px;
    elevation:2;
`

export const ProfileHeader = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 12px;
    border-width: 2px;
    border-color: #E0E0E0;
`

export const ProfileInfo = styled.View`
    margin-left: 16px;
`

export const Name = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: "#333333";
`
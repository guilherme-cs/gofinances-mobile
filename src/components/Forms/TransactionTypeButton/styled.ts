import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";

interface IconProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: ${({ isActive }) => isActive ? 0 : 1.5}px solid ${theme.colors.text};
    border-radius: 5px;
    
    padding: 16px 35px;

    ${({ isActive, type }) => isActive && type === 'up' && css`
        background-color: ${theme.colors.success_light};
    `}

    ${({ isActive, type }) => isActive && type === 'down' && css`
        background-color: ${theme.colors.danger_light};
    `}
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({type}) => type === 'up' ? theme.colors.success : theme.colors.danger}
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;

`;
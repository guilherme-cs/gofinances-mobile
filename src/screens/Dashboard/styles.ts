import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

import{ DataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;

    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between; /*colado nas bordas*/
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGeeting = styled.Text`
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const LogoutButton = styled(BorderlessButton)`
    
`;

/* usar attrs para acessar propriedades do componente */
export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }})`
    width: 100%;
    position: absolute;
    top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1; /* ocupa todo espaço restante da tela */
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;

    margin-bottom: 16px;
`;

export const TransactionList = styled(FlatList as new () => FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``;
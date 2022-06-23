import styled from 'styled-components';

export const UserCardContainer = styled.div.attrs({
  'data-test-id': 'user-card'
})`
  height: 94px;
  width: 441px;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  background-color: #ffffff;
  padding-left: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const UserIcon = styled.div.attrs({
  'data-test-id': 'icon'
})`
  height: 42px;
  width: 42px;
  background-color: #587cc8;
  border-radius: 100%;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const UserInfo = styled.div.attrs({
  'data-test-id': 'user-info'
})`
  display: flex;
  flex-direction: column;
  margin-left: 13px;

  h4 {
    margin: 0;
    margin-top: 4px;
    font-weight: 400;
    font-size: 15px;
  }

  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
    margin: 0;
    margin-top: 4px;
  }
`;

export const AllCardsContainer = styled.main.attrs({
  'data-test-id': 'all-user-cards'
})`
  height: 70%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #eeeeee;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #587cc8;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #6c8dd1;
  }
`;

import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: auto;
`;

export const MainDataBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 48px;
  color: #121417;
`;

export const DetailsBox = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4px;

  height: 40px;
  overflow: hidden;

  p {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  p + p::before {
    content: '';
    width: 6px;
    height: 16px;
    margin: 0 6px;
    border: 1px solid rgba(18, 20, 23, 0.1);
  }
  width: 100%;
`;

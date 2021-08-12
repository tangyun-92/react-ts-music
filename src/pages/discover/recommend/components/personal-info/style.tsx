import styled from 'styled-components'

export const PersonalInfoWrapper = styled.div `

  .n-content {
    width: 248px;
    height: 126px;
    background-position: 0 0;

    .info {
      width: 205px;
      padding: 16px 0;
      margin: 0 auto;
      line-height: 22px;
    }

    .login {
      display: block;
      cursor: pointer;
      width: 100px;
      height: 31px;
      color: #fff;
      text-shadow: 0 1px 0 #8a060d;
      background-position: 0 -195px;
      margin: 0 auto;

      &:hover {
        background-position: -110px -195px;
      }
    }
  }
`
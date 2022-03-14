import { Layout } from 'antd';

const Footer = () => {
  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: 'center' }}>React Social Network © 2021 - {new Date().getFullYear()} Created by <a href={'https://github.com/kast96'} target={'_blank'} rel="noreferrer">kast96</a></Footer>
  );
}
  
export default Footer;
  
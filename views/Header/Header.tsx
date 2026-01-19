import Navbar from '@/components/organisms/Navbar';
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  return (
    <>
      <Navbar
        logoSrc="/logo.png"
        siteName="Ascend and Learn"
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;

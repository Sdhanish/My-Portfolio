// utils/heroUtils.ts

export function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

  // const scrollToSection = (href: string) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //     setIsMobileMenuOpen(false);
  //   }
  // };

export function handleDownloadCV() {
  const link = document.createElement("a");
  link.href = "/resume/Dhanish_S_Full_Stack_Developer_Resume.pdf";
  link.download = "Dhanish_S_Full_Stack_Developer_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

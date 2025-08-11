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
  link.href = "/resume/DHANISH S Resume Full Stack Developer.pdf";
  link.download = "DHANISH S Resume Full Stack Developer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

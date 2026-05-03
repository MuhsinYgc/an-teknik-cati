export function scrollToSection(id: string, onDone?: () => void) {
  if (id === "anasayfa" || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onDone?.();
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onDone?.();
}

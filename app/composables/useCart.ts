import type { StoreEdition } from "~/data/store";

export interface CartLine {
  id: string;
  title: string;
  edition: string;
  price: number;
  image: string;
  alt: string;
  quantity: number;
}

const watchedApps = new WeakSet<object>();

export function useCart() {
  const cookie = useCookie<CartLine[]>("denva-cart", {
    default: () => [],
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });

  const lines = useState<CartLine[]>("denva-cart-lines", () => [...(cookie.value ?? [])]);

  const nuxtApp = useNuxtApp();

  if (import.meta.client && !watchedApps.has(nuxtApp)) {
    watchedApps.add(nuxtApp);
    watch(
      lines,
      (value) => {
        cookie.value = value;
      },
      { deep: true },
    );
  }

  const count = computed(() =>
    lines.value.reduce((total, line) => total + line.quantity, 0),
  );

  const subtotal = computed(() =>
    lines.value.reduce((total, line) => total + line.price * line.quantity, 0),
  );

  function getQuantity(id: string): number {
    const line = lines.value.find(item => item.id === id);
    return line ? line.quantity : 0;
  }

  function add(edition: StoreEdition) {
    const existing = lines.value.find(line => line.id === edition.id);

    if (existing) {
      existing.quantity = Math.min(existing.quantity + 1, 9);
      return;
    }

    lines.value.push({
      id: edition.id,
      title: edition.title,
      edition: edition.edition,
      price: edition.price,
      image: edition.image,
      alt: edition.alt,
      quantity: 1,
    });
  }

  function decrement(id: string) {
    const line = lines.value.find(item => item.id === id);
    if (!line) return;

    if (line.quantity <= 1) {
      remove(id);
    }
    else {
      line.quantity -= 1;
    }
  }

  function remove(id: string) {
    lines.value = lines.value.filter(line => line.id !== id);
  }

  function setQuantity(id: string, quantity: number) {
    const line = lines.value.find(item => item.id === id);
    if (!line) return;

    if (quantity < 1) {
      remove(id);
      return;
    }

    line.quantity = Math.min(quantity, 9);
  }

  function clear() {
    lines.value = [];
  }

  return {
    lines,
    count,
    subtotal,
    getQuantity,
    add,
    decrement,
    remove,
    setQuantity,
    clear,
  };
}

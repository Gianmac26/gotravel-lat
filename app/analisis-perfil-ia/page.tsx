import { redirect } from "next/navigation";

/**
 * El servicio de Evaluación de Perfil con IA fue descontinuado.
 * Esta URL se mantiene únicamente para no romper enlaces ya indexados
 * o compartidos, y redirige a la asesoría gratuita por WhatsApp.
 */
export default function AnalisisPerfilIA() {
  redirect(
    "https://wa.me/51928672932?text=Hola%20Goviaje,%20quiero%20agendar%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20visa"
  );
}

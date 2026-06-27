import { createClient } from "@supabase/supabase-js";

// ============================================================================
// Cliente Supabase do site SBA Negócios
// Projeto: gestao-integrada-dados (org "Gestão Integrada")
//
// A chave abaixo é a chave PÚBLICA (publishable) — é segura no front-end porque
// o acesso ao banco é controlado por Row Level Security (RLS). Visitantes anônimos
// não leem nem escrevem direto nas tabelas. Os leads do site vão pela Edge Function
// `submit-lead` (ver FormularioContato.tsx), que grava com a service role.
//
// Se preferir, no Lovable dá pra mover esses dois valores para variáveis de
// ambiente (VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY) — o código já usa elas
// quando existirem.
// ============================================================================

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? "https://lbjudeifksyeqminwlto.supabase.co";

const SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  "sb_publishable_YkkrpqvZ4mDY2KLq0g473A_6JRrSqcj";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

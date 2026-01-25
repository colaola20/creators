import {createClient} from '@supabase/supabase-js';


const URL = 'https://avzedxfewiwqoqnvqmoc.supabase.co';
const API_KEY = 'sb_publishable_8Ol8SCbYapNxd1JcljN6sA_WvshlQP5'

export const supabase = createClient(URL, API_KEY);

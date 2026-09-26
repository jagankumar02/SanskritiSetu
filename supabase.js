// ==========================================
// SANSKRITISETU - SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = "https://gpibipeixgczisajzdce.supabase.co";

// IMPORTANT:
// Yahan apni Supabase PUBLISHABLE KEY paste karo.
// Secret / service_role key mat use karna.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_NjuSHVB63Mx8NCS5e4-flQ_4eTpa-pC";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ==========================================
// GET CURRENT USER
// ==========================================

async function getCurrentUser() {

    const {
        data: { user },
        error
    } = await supabaseClient.auth.getUser();

    if (error) {
        console.error("Get user error:", error);
        return null;
    }

    return user;
}


// ==========================================
// LOGIN
// ==========================================

async function loginUser(email, password) {

    return await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

}


// ==========================================
// SEND SIGNUP OTP
// ==========================================

async function sendSignupOtp(email, name) {

    return await supabaseClient.auth.signInWithOtp({
        email: email,
        options: {
            shouldCreateUser: true,
            data: {
                full_name: name
            }
        }
    });

}


// ==========================================
// VERIFY SIGNUP OTP
// ==========================================

async function verifySignupOtp(email, otp) {

    return await supabaseClient.auth.verifyOtp({
        email: email,
        token: otp,
        type: "email"
    });

}


// ==========================================
// CREATE PASSWORD AFTER OTP
// ==========================================

async function createUserPassword(password, name) {

    const {
        data,
        error
    } = await supabaseClient.auth.updateUser({
        password: password,
        data: {
            full_name: name
        }
    });

    if (error) {
        return {
            data: null,
            error: error
        };
    }


    // --------------------------------------
    // SAVE BASIC PROFILE
    // --------------------------------------

    const user = data.user;

    if (!user) {
        return {
            data: null,
            error: new Error("User session not found.")
        };
    }


    const { error: profileError } =
        await supabaseClient
            .from("sanskriti_profiles")
            .upsert({
                user_id: user.id,
                full_name: name,
                email: user.email
            }, {
                onConflict: "user_id"
            });


    if (profileError) {

        console.error(
            "Profile save error:",
            profileError
        );

        return {
            data: data,
            error: profileError
        };

    }


    return {
        data: data,
        error: null
    };

}


// ==========================================
// LOGOUT
// ==========================================

async function logoutUser() {

    return await supabaseClient.auth.signOut();

}


// ==========================================
// AUTH STATE LISTENER
// ==========================================

supabaseClient.auth.onAuthStateChange(
    (event, session) => {

        console.log(
            "Auth event:",
            event
        );

    }
);
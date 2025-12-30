import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your credentials
const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function testConnection() {
    console.log('🔍 Testing Supabase Connection...\n');
    console.log('Project URL: https://sykpebdlhqtgpvgqazzw.supabase.co');
    console.log('Project Name: Hope3-website\n');

    try {
        // Test 1: Check if we can query the donors table
        console.log('📊 Test 1: Checking donors table...');
        const { data: donorsData, error: donorsError } = await supabase
            .from('donors')
            .select('*')
            .limit(1);

        if (donorsError) {
            console.error('❌ Donors table error:', donorsError.message);
        } else {
            console.log('✅ Donors table accessible');
        }

        // Test 2: Check if we can query the volunteers table
        console.log('\n📊 Test 2: Checking volunteers table...');
        const { data: volunteersData, error: volunteersError } = await supabase
            .from('volunteers')
            .select('*')
            .limit(1);

        if (volunteersError) {
            console.error('❌ Volunteers table error:', volunteersError.message);
        } else {
            console.log('✅ Volunteers table accessible');
        }

        // Test 3: Check if we can query the interest_students table
        console.log('\n📊 Test 3: Checking interest_students table...');
        const { data: studentsData, error: studentsError } = await supabase
            .from('interest_students')
            .select('*')
            .limit(1);

        if (studentsError) {
            console.error('❌ Interest_students table error:', studentsError.message);
        } else {
            console.log('✅ Interest_students table accessible');
        }

        // Summary
        console.log('\n' + '='.repeat(50));
        console.log('📋 CONNECTION TEST SUMMARY');
        console.log('='.repeat(50));

        const allSuccess = !donorsError && !volunteersError && !studentsError;

        if (allSuccess) {
            console.log('✅ All tables are accessible!');
            console.log('✅ Supabase connection is working correctly!');
        } else {
            console.log('⚠️  Some tables have issues. Please check the errors above.');
            console.log('\n💡 Common fixes:');
            console.log('   1. Verify tables exist in your Supabase dashboard');
            console.log('   2. Check Row Level Security (RLS) policies');
            console.log('   3. Ensure API key has correct permissions');
        }

    } catch (error) {
        console.error('\n❌ Connection test failed:', error.message);
        console.log('\n💡 Troubleshooting steps:');
        console.log('   1. Check your internet connection');
        console.log('   2. Verify the project URL is correct');
        console.log('   3. Verify the API key is correct');
        console.log('   4. Check if the Supabase project is active');
    }
}

// Run the test
testConnection();

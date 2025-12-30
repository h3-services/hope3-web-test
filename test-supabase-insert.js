import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your credentials
const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function testInserts() {
    console.log('🧪 Testing Supabase Insert Operations...\n');
    console.log('Project: Hope3-website\n');
    console.log('='.repeat(60));

    try {
        // Test 1: Insert into donors table
        console.log('\n📝 Test 1: Inserting test donor...');
        const testDonor = {
            name: 'Test Donor ' + new Date().getTime(),
            email: `testdonor${Date.now()}@example.com`,
            phone: '+1234567890'
        };

        const { data: donorData, error: donorError } = await supabase
            .from('donors')
            .insert([testDonor])
            .select();

        if (donorError) {
            console.error('❌ Failed to insert donor:', donorError.message);
            console.error('   Details:', donorError);
        } else {
            console.log('✅ Donor inserted successfully!');
            console.log('   Data:', JSON.stringify(donorData, null, 2));
        }

        // Test 2: Insert into volunteers table
        console.log('\n📝 Test 2: Inserting test volunteer...');
        const testVolunteer = {
            name: 'Test Volunteer ' + new Date().getTime(),
            district: 'Test District',
            volunteer_location: 'Test Location',
            email: `testvolunteer${Date.now()}@example.com`,
            phone: '+1234567891'
        };

        const { data: volunteerData, error: volunteerError } = await supabase
            .from('volunteers')
            .insert([testVolunteer])
            .select();

        if (volunteerError) {
            console.error('❌ Failed to insert volunteer:', volunteerError.message);
            console.error('   Details:', volunteerError);
        } else {
            console.log('✅ Volunteer inserted successfully!');
            console.log('   Data:', JSON.stringify(volunteerData, null, 2));
        }

        // Test 3: Insert into interest_students table
        console.log('\n📝 Test 3: Inserting test student...');
        const testStudent = {
            name: 'Test Student ' + new Date().getTime(),
            district: 'Test District',
            passion: 'Technology & Innovation',
            email: `teststudent${Date.now()}@example.com`,
            phone: '+1234567892'
        };

        const { data: studentData, error: studentError } = await supabase
            .from('interest_students')
            .insert([testStudent])
            .select();

        if (studentError) {
            console.error('❌ Failed to insert student:', studentError.message);
            console.error('   Details:', studentError);
        } else {
            console.log('✅ Student inserted successfully!');
            console.log('   Data:', JSON.stringify(studentData, null, 2));
        }

        // Summary
        console.log('\n' + '='.repeat(60));
        console.log('📊 INSERT TEST SUMMARY');
        console.log('='.repeat(60));

        const successCount = [!donorError, !volunteerError, !studentError].filter(Boolean).length;
        const totalTests = 3;

        console.log(`✅ Successful inserts: ${successCount}/${totalTests}`);

        if (successCount === totalTests) {
            console.log('\n🎉 All insert operations successful!');
            console.log('✅ Your forms should work perfectly in production!');
        } else {
            console.log('\n⚠️  Some inserts failed. Common issues:');
            console.log('   1. Row Level Security (RLS) policies blocking inserts');
            console.log('   2. Missing required columns in table schema');
            console.log('   3. Data type mismatches');
            console.log('   4. Unique constraint violations');
            console.log('\n💡 Solution: Check your Supabase dashboard > Table Editor');
            console.log('   and verify RLS policies under Authentication > Policies');
        }

        // Count records in each table
        console.log('\n' + '='.repeat(60));
        console.log('📈 CURRENT RECORD COUNTS');
        console.log('='.repeat(60));

        const { count: donorCount } = await supabase
            .from('donors')
            .select('*', { count: 'exact', head: true });
        console.log(`Donors: ${donorCount} records`);

        const { count: volunteerCount } = await supabase
            .from('volunteers')
            .select('*', { count: 'exact', head: true });
        console.log(`Volunteers: ${volunteerCount} records`);

        const { count: studentCount } = await supabase
            .from('interest_students')
            .select('*', { count: 'exact', head: true });
        console.log(`Interest Students: ${studentCount} records`);

    } catch (error) {
        console.error('\n❌ Test failed with error:', error.message);
        console.error('Stack:', error.stack);
    }
}

// Run the test
testInserts();

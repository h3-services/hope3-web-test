import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function testWithCorrectColumns() {
    console.log('🧪 Testing with CORRECT Column Names\n');
    console.log('Discovered column name: contact_no (not phone!)\n');
    console.log('='.repeat(70));

    const timestamp = Date.now();
    let successCount = 0;

    // Test 1: Donors
    console.log('\n📝 Test 1: DONORS table with contact_no...');
    const donor = await supabase.from('donors').insert([{
        name: `Test Donor ${timestamp}`,
        email: `donor${timestamp}@test.com`,
        contact_no: '+91 9876543210'
    }]).select();

    if (donor.error) {
        console.log('❌ Error:', donor.error.message);
    } else {
        console.log('✅ SUCCESS!');
        console.log('   Record:', JSON.stringify(donor.data[0], null, 2));
        successCount++;
    }

    // Test 2: Volunteers
    console.log('\n📝 Test 2: VOLUNTEERS table with contact_no...');
    const volunteer = await supabase.from('volunteers').insert([{
        name: `Test Volunteer ${timestamp}`,
        email: `volunteer${timestamp}@test.com`,
        district: 'Chennai',
        volunteer_location: 'Remote',
        contact_no: '+91 9876543211'
    }]).select();

    if (volunteer.error) {
        console.log('❌ Error:', volunteer.error.message);
    } else {
        console.log('✅ SUCCESS!');
        console.log('   Record:', JSON.stringify(volunteer.data[0], null, 2));
        successCount++;
    }

    // Test 3: Interest Students
    console.log('\n📝 Test 3: INTEREST_STUDENTS table with contact_no...');
    const student = await supabase.from('interest_students').insert([{
        name: `Test Student ${timestamp}`,
        email: `student${timestamp}@test.com`,
        district: 'Madurai',
        passion: 'Technology',
        contact_no: '+91 9876543212'
    }]).select();

    if (student.error) {
        console.log('❌ Error:', student.error.message);
    } else {
        console.log('✅ SUCCESS!');
        console.log('   Record:', JSON.stringify(student.data[0], null, 2));
        successCount++;
    }

    // Summary
    console.log('\n' + '='.repeat(70));
    console.log('📊 FINAL TEST RESULTS');
    console.log('='.repeat(70));
    console.log(`✅ Successful: ${successCount}/3`);

    if (successCount === 3) {
        console.log('\n🎉 PERFECT! All inserts successful!');
        console.log('✅ RLS is disabled correctly');
        console.log('✅ Column name is: contact_no');
        console.log('\n⚠️  IMPORTANT: Your code needs to be updated!');
        console.log('   Current code uses: phone');
        console.log('   Should be changed to: contact_no');
    }

    // Show database counts
    console.log('\n' + '='.repeat(70));
    console.log('📈 DATABASE RECORD COUNTS');
    console.log('='.repeat(70));

    for (const table of ['donors', 'volunteers', 'interest_students']) {
        const { count } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });
        console.log(`${table.padEnd(25)}: ${count} record(s)`);
    }

    console.log('\n' + '='.repeat(70));
}

testWithCorrectColumns();

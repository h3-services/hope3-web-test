import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function findCorrectColumns() {
    console.log('🔍 Discovering Actual Table Schemas\n');
    console.log('='.repeat(70));

    // Try inserting with only name and email (minimal fields)
    const timestamp = Date.now();

    console.log('\n📋 Testing DONORS table with minimal fields...');
    const donorTest = await supabase.from('donors').insert([{
        name: `Test ${timestamp}`,
        email: `test${timestamp}@example.com`
    }]).select();

    if (donorTest.error) {
        console.log('❌ Error:', donorTest.error.message);
    } else {
        console.log('✅ Success! Columns in donors table:');
        console.log(JSON.stringify(donorTest.data[0], null, 2));
        console.log('\nColumn names:', Object.keys(donorTest.data[0]).join(', '));
    }

    console.log('\n' + '-'.repeat(70));
    console.log('\n📋 Testing VOLUNTEERS table with minimal fields...');
    const volunteerTest = await supabase.from('volunteers').insert([{
        name: `Test ${timestamp}`,
        email: `test${timestamp}@example.com`,
        district: 'Test',
        volunteer_location: 'Test'
    }]).select();

    if (volunteerTest.error) {
        console.log('❌ Error:', volunteerTest.error.message);
    } else {
        console.log('✅ Success! Columns in volunteers table:');
        console.log(JSON.stringify(volunteerTest.data[0], null, 2));
        console.log('\nColumn names:', Object.keys(volunteerTest.data[0]).join(', '));
    }

    console.log('\n' + '-'.repeat(70));
    console.log('\n📋 Testing INTEREST_STUDENTS table with minimal fields...');
    const studentTest = await supabase.from('interest_students').insert([{
        name: `Test ${timestamp}`,
        email: `test${timestamp}@example.com`,
        district: 'Test'
    }]).select();

    if (studentTest.error) {
        console.log('❌ Error:', studentTest.error.message);
    } else {
        console.log('✅ Success! Columns in interest_students table:');
        console.log(JSON.stringify(studentTest.data[0], null, 2));
        console.log('\nColumn names:', Object.keys(studentTest.data[0]).join(', '));
    }

    console.log('\n' + '='.repeat(70));
    console.log('📊 Summary');
    console.log('='.repeat(70));
    console.log('Now we know the exact column names in each table!');
    console.log('We can update the code to match the actual schema.');
}

findCorrectColumns();

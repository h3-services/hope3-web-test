import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function testWithDifferentColumnNames() {
    console.log('🔍 Testing different column name variations...\n');

    const timestamp = Date.now();

    // Test 1: Try 'phone' column name
    console.log('Test 1: Using "phone" as column name');
    const test1 = await supabase.from('donors').insert([{
        name: `Test ${timestamp}`,
        email: `test${timestamp}@example.com`,
        phone: '+1234567890'
    }]).select();
    console.log('Result:', test1.error ? `❌ ${test1.error.message}` : '✅ Success');

    // Test 2: Try 'contact_number' column name
    console.log('\nTest 2: Using "contact_number" as column name');
    const test2 = await supabase.from('donors').insert([{
        name: `Test ${timestamp}`,
        email: `test${timestamp}@example.com`,
        contact_number: '+1234567890'
    }]).select();
    console.log('Result:', test2.error ? `❌ ${test2.error.message}` : '✅ Success');

    // Test 3: Try without phone field
    console.log('\nTest 3: Without phone/contact field');
    const test3 = await supabase.from('donors').insert([{
        name: `Test ${timestamp}`,
        email: `test${timestamp}@example.com`
    }]).select();
    console.log('Result:', test3.error ? `❌ ${test3.error.message}` : '✅ Success');

    console.log('\n' + '='.repeat(60));
    console.log('Testing volunteers table...\n');

    // Test volunteers
    console.log('Test 4: Volunteers with contact_number');
    const test4 = await supabase.from('volunteers').insert([{
        name: `Volunteer ${timestamp}`,
        district: 'Test',
        volunteer_location: 'Test',
        email: `vol${timestamp}@example.com`,
        contact_number: '+1234567890'
    }]).select();
    console.log('Result:', test4.error ? `❌ ${test4.error.message}` : '✅ Success');

    console.log('\nTest 5: Volunteers with phone');
    const test5 = await supabase.from('volunteers').insert([{
        name: `Volunteer ${timestamp}`,
        district: 'Test',
        volunteer_location: 'Test',
        email: `vol${timestamp}@example.com`,
        phone: '+1234567890'
    }]).select();
    console.log('Result:', test5.error ? `❌ ${test5.error.message}` : '✅ Success');

    console.log('\n' + '='.repeat(60));
    console.log('Testing interest_students table...\n');

    // Test students
    console.log('Test 6: Students with contact_number');
    const test6 = await supabase.from('interest_students').insert([{
        name: `Student ${timestamp}`,
        district: 'Test',
        passion: 'Tech',
        email: `student${timestamp}@example.com`,
        contact_number: '+1234567890'
    }]).select();
    console.log('Result:', test6.error ? `❌ ${test6.error.message}` : '✅ Success');

    console.log('\nTest 7: Students with phone');
    const test7 = await supabase.from('interest_students').insert([{
        name: `Student ${timestamp}`,
        district: 'Test',
        passion: 'Tech',
        email: `student${timestamp}@example.com`,
        phone: '+1234567890'
    }]).select();
    console.log('Result:', test7.error ? `❌ ${test7.error.message}` : '✅ Success');
}

testWithDifferentColumnNames();

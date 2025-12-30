import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

async function testInsertsAfterRLSFix() {
    console.log('🧪 Testing Supabase Inserts After RLS Fix\n');
    console.log('Project: Hope3-website');
    console.log('URL: https://sykpebdlhqtgpvgqazzw.supabase.co\n');
    console.log('='.repeat(70));

    const timestamp = Date.now();
    let successCount = 0;
    let failCount = 0;

    // Test 1: Insert into donors table
    console.log('\n📝 Test 1: Inserting into DONORS table...');
    console.log('-'.repeat(70));
    try {
        const donorData = {
            name: `Test Donor ${timestamp}`,
            email: `donor${timestamp}@test.com`,
            phone: '+91 9876543210'
        };

        const { data, error } = await supabase
            .from('donors')
            .insert([donorData])
            .select();

        if (error) {
            console.log(`❌ FAILED: ${error.message}`);
            console.log(`   Error Code: ${error.code}`);
            failCount++;
        } else {
            console.log('✅ SUCCESS!');
            console.log(`   Inserted Record:`, JSON.stringify(data[0], null, 2));
            successCount++;
        }
    } catch (err) {
        console.log(`❌ ERROR: ${err.message}`);
        failCount++;
    }

    // Test 2: Insert into volunteers table
    console.log('\n📝 Test 2: Inserting into VOLUNTEERS table...');
    console.log('-'.repeat(70));
    try {
        const volunteerData = {
            name: `Test Volunteer ${timestamp}`,
            district: 'Chennai',
            volunteer_location: 'Remote',
            email: `volunteer${timestamp}@test.com`,
            phone: '+91 9876543211'
        };

        const { data, error } = await supabase
            .from('volunteers')
            .insert([volunteerData])
            .select();

        if (error) {
            console.log(`❌ FAILED: ${error.message}`);
            console.log(`   Error Code: ${error.code}`);
            failCount++;
        } else {
            console.log('✅ SUCCESS!');
            console.log(`   Inserted Record:`, JSON.stringify(data[0], null, 2));
            successCount++;
        }
    } catch (err) {
        console.log(`❌ ERROR: ${err.message}`);
        failCount++;
    }

    // Test 3: Insert into interest_students table
    console.log('\n📝 Test 3: Inserting into INTEREST_STUDENTS table...');
    console.log('-'.repeat(70));
    try {
        const studentData = {
            name: `Test Student ${timestamp}`,
            district: 'Madurai',
            passion: 'Technology & Innovation',
            email: `student${timestamp}@test.com`,
            phone: '+91 9876543212'
        };

        const { data, error } = await supabase
            .from('interest_students')
            .insert([studentData])
            .select();

        if (error) {
            console.log(`❌ FAILED: ${error.message}`);
            console.log(`   Error Code: ${error.code}`);
            failCount++;
        } else {
            console.log('✅ SUCCESS!');
            console.log(`   Inserted Record:`, JSON.stringify(data[0], null, 2));
            successCount++;
        }
    } catch (err) {
        console.log(`❌ ERROR: ${err.message}`);
        failCount++;
    }

    // Summary
    console.log('\n' + '='.repeat(70));
    console.log('📊 TEST RESULTS SUMMARY');
    console.log('='.repeat(70));
    console.log(`✅ Successful Inserts: ${successCount}/3`);
    console.log(`❌ Failed Inserts: ${failCount}/3`);

    if (successCount === 3) {
        console.log('\n🎉 EXCELLENT! All inserts successful!');
        console.log('✅ RLS fix worked perfectly!');
        console.log('✅ Your website forms will now work correctly!');
    } else if (successCount > 0) {
        console.log('\n⚠️  Partial success - some tables still have issues');
        console.log('💡 Check the error messages above for details');
    } else {
        console.log('\n❌ All inserts failed');
        console.log('💡 Possible issues:');
        console.log('   - RLS might still be enabled on some tables');
        console.log('   - Column names might not match');
        console.log('   - Check Supabase dashboard for table settings');
    }

    // Show current record counts
    console.log('\n' + '='.repeat(70));
    console.log('📈 CURRENT DATABASE RECORDS');
    console.log('='.repeat(70));

    for (const table of ['donors', 'volunteers', 'interest_students']) {
        const { count, error } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });

        if (!error) {
            console.log(`${table.padEnd(25)}: ${count} record(s)`);
        }
    }

    console.log('\n' + '='.repeat(70));

    if (successCount === 3) {
        console.log('\n✨ Next Steps:');
        console.log('   1. Test your website forms in the browser');
        console.log('   2. Submit test data through each form');
        console.log('   3. Verify data appears in Supabase dashboard');
        console.log('   4. Consider re-enabling RLS with proper policies for production');
    }
}

testInsertsAfterRLSFix();
